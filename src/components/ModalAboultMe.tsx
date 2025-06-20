interface ModalAboutMeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAboutMe({ isOpen, onClose }: ModalAboutMeProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-linear-to-t from-blue-500 to-blue-950 ${
        isOpen ? "flex" : "hidden"
      } flex-col gap-4 p-8`}
    >
      <h2 className="text-lg font-bold text-blue-50">Sobre mim</h2>
      <p className="mt-2 text-blue-50">
        Aqui você pode adicionar informações sobre você.
      </p>

      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Fechar
      </button>
    </div>
  );
}
