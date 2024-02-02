import { Header, Tourist } from "@components/molecules";
import useHome from "./hooks/useHome";
import { Pagination } from "flowbite-react";
import { ModalDeleteTourist, ModalEditTourist } from "@components/organisms";
import { useDeleteTourist, useEditTourist } from "@hooks";

const Home = () => {
  const {
    userData,
    currentPage,
    onPageChange,
    totalPages,
    touristList,
    refetchTourist,
  } = useHome();

  const {
    selectedTourist,
    showDelete,
    onClickDelete,
    onCloseDelete,
    onSuccessDelete,
  } = useDeleteTourist({ refetchFn: refetchTourist });

  const {
    selectedTourist: editedTourist,
    showEdit,
    onClickEdit,
    onCloseEdit,
    onSuccessEdit,
  } = useEditTourist({ refetchFn: refetchTourist });

  return (
    <div className="flex h-screen w-full flex-col bg-neutral-100 px-16 py-10">
      <Header
        title={`Hello! ${userData?.name}`}
        description="Let's manage your beloved customer today!"
        showAvatar
      />
      <div className="my-4 overflow-y-auto">
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
      <ModalEditTourist
        show={showEdit}
        initial={editedTourist}
        onClose={onCloseEdit}
        onSuccess={onSuccessEdit}
      />
      <ModalDeleteTourist
        show={showDelete}
        initial={selectedTourist}
        onClose={onCloseDelete}
        onSuccess={onSuccessDelete}
      />
    </div>
  );
};

export default Home;
