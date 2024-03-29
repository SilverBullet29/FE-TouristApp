import { FC, useCallback } from "react";
import { touristQueries } from "@infra/queries";
import { useMatch, useNavigate } from "react-router-dom";
import { ActionButton } from "@components/atoms";
import { ModalActionTourist, ModalDeleteTourist } from "@components/organisms";
import { useActionTourist, useDeleteTourist } from "@hooks";

type ItemContentProps = {
  title: string;
  content?: string;
};

const TouristDetail = () => {
  const match = useMatch({ path: "/tourist/:id" });
  const navigate = useNavigate();

  const { data, refetch } = touristQueries.useQueryDetail(
    { id: match?.params?.id ?? "" },
    { enabled: !!match?.params?.id },
  );

  const refetchFn = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  const { showDelete, onClickDelete, onCloseDelete, onSuccessDelete } =
    useDeleteTourist({ refetchFn });

  const { showEdit, onClickEdit, onCloseAction, onSuccessAction } =
    useActionTourist({
      refetchFn: refetch,
    });

  const handleClickDelete = useCallback(() => {
    if (data) {
      onClickDelete(data);
    }
  }, [onClickDelete, data]);

  const handleClickEdit = useCallback(() => {
    if (data) {
      onClickEdit(data);
    }
  }, [onClickDelete, data]);

  return (
    <div className="h-screen w-full p-6 lg:p-16">
      <p className="mb-6 text-4xl font-semibold tracking-wide">
        Tourist Detail
      </p>
      <div className="border-custom-100 h-fit w-full rounded-xl border p-6 lg:w-[500px]">
        <div className="flex flex-row items-start justify-between">
          <img
            src={data?.tourist_profilepicture}
            className="mb-4 h-20 w-20 rounded-xl lg:h-40 lg:w-40"
          />
          <div className="flex">
            <ActionButton
              icon="pencil"
              color="primary-500"
              onClick={handleClickEdit}
            />
            <ActionButton
              icon="trash"
              color="error-500"
              onClick={handleClickDelete}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <ItemContent title="Name" content={data?.tourist_name} />
          <ItemContent title="Email" content={data?.tourist_email} />
          <ItemContent title="Location" content={data?.tourist_location} />
        </div>
      </div>
      <>
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
      </>
    </div>
  );
};

const ItemContent: FC<ItemContentProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col">
      <p className="text-xs text-neutral-400 lg:text-sm">{title}</p>
      <p className="text-base font-medium text-neutral-700 lg:text-lg">
        {content ?? ""}
      </p>
    </div>
  );
};

export default TouristDetail;
