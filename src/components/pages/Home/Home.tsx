import { Tourist } from "@components/molecules";
import useHome from "./hooks/useHome";
import { Pagination } from "flowbite-react";
import { ModalDeleteTourist, ModalActionTourist } from "@components/organisms";
import { useDeleteTourist, useActionTourist } from "@hooks";
import { Button } from "@components/atoms";
import AvatarIcon from "@assets/image/avatar.webp";
import { useMemo } from "react";
import { Tourist as TouristType } from "@infra/services/types";

const Home = () => {
  const {
    userData,
    currentPage,
    onPageChange,
    totalPages,
    touristList,
    refetchTourist,
    isLoading,
  } = useHome();

  const { showDelete, onClickDelete, onCloseDelete, onSuccessDelete } =
    useDeleteTourist({ refetchFn: refetchTourist });

  const { showEdit, onClickEdit, onCloseAction, onSuccessAction, onClickAdd } =
    useActionTourist({
      refetchFn: refetchTourist,
    });

  const content = useMemo(() => {
    const renderItem = ({ ...props }: TouristType.Item) => (
      <Tourist
        key={props.id}
        {...props}
        onClickEdit={() => onClickEdit({ ...props })}
        onClickDelete={() => onClickDelete({ ...props })}
      />
    );

    const renderLoading = () => (
      <div className="grid w-full grid-cols-4 items-center border-b border-neutral-200 py-3 pr-4">
        <div className="flex flex-row items-center gap-4">
          <div className="flex h-10 w-10 animate-pulse flex-row items-center rounded-full bg-neutral-400" />
          <div className="flex h-4 w-16 animate-pulse flex-row items-center rounded-md bg-neutral-400" />
        </div>
        <div className="flex h-4 w-16 animate-pulse flex-row items-center rounded-md bg-neutral-400" />
        <div className="flex h-4 w-16 animate-pulse flex-row items-center rounded-md bg-neutral-400" />
        <div className="flex items-center justify-end gap-x-10">
          <div className="flex h-5 w-5 animate-pulse flex-row  rounded-md bg-neutral-400" />
          <div className="flex h-5 w-5 animate-pulse flex-row  rounded-md bg-neutral-400" />
        </div>
      </div>
    );

    if (!!touristList?.length && !isLoading) {
      return touristList.map(renderItem);
    }
    if (isLoading) {
      return Array.from({ length: 10 }).fill(" ").map(renderLoading);
    }
    return <></>;
  }, [touristList, isLoading, onClickEdit, onClickDelete]);

  return (
    <div className="relative flex h-full w-full flex-col bg-neutral-100 px-6 pb-8 lg:px-16">
      <div
        id="header-home"
        className="sticky top-0 z-10 flex flex-col items-start justify-between border-b border-neutral-200 bg-neutral-100 py-6 lg:flex-row lg:items-center"
      >
        <div className="mb-6 flex flex-row items-center gap-6 lg:mb-0">
          <img
            src={AvatarIcon}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div id="greeting" className="">
            <p className="mb-1 text-xl font-semibold tracking-wide lg:text-3xl">{`Hello! ${userData?.name}`}</p>
            <p className="text-base font-light text-neutral-500">
              Let's manage your beloved customer today!
            </p>
          </div>
        </div>
        <Button type="button" onClick={onClickAdd}>
          Add Tourist
        </Button>
      </div>
      <div className="z-0 mb-4 max-h-[calc(100vh-240px)] overflow-y-auto">
        {content}
      </div>
      <div className="mt-4 flex w-full justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
      <ModalActionTourist
        show={showEdit}
        onClose={onCloseAction}
        onSuccess={onSuccessAction}
      />
      <ModalDeleteTourist
        show={showDelete}
        onClose={onCloseDelete}
        onSuccess={onSuccessDelete}
      />
    </div>
  );
};

export default Home;
