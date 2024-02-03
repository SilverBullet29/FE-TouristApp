import { Tourist } from "@components/molecules";
import useHome from "./hooks/useHome";
import { Pagination } from "flowbite-react";
import { ModalDeleteTourist, ModalActionTourist } from "@components/organisms";
import { useDeleteTourist, useActionTourist } from "@hooks";
import { Button } from "@components/atoms";
import AvatarIcon from "@assets/image/avatar.webp";

const Home = () => {
  const {
    userData,
    currentPage,
    onPageChange,
    totalPages,
    touristList,
    refetchTourist,
  } = useHome();

  const { showDelete, onClickDelete, onCloseDelete, onSuccessDelete } =
    useDeleteTourist({ refetchFn: refetchTourist });

  const { showEdit, onClickEdit, onCloseAction, onSuccessAction, onClickAdd } =
    useActionTourist({
      refetchFn: refetchTourist,
    });

  return (
    <div className="relative flex h-full w-full flex-col bg-neutral-100 px-16 pb-8">
      <div
        id="header-home"
        className="sticky top-0 z-10 flex w-full flex-row items-center justify-between border-b border-neutral-200 bg-neutral-100 py-6"
      >
        <div className="flex flex-row items-center gap-6">
          <img
            src={AvatarIcon}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div id="greeting" className="">
            <p className="mb-1 text-3xl font-semibold tracking-wide">{`Hello! ${userData?.name}`}</p>
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
        {!!touristList?.length &&
          touristList.map(({ ...props }) => (
            <Tourist
              key={props.id}
              {...props}
              onClickEdit={() => onClickEdit({ ...props })}
              onClickDelete={() => onClickDelete({ ...props })}
            />
          ))}
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
