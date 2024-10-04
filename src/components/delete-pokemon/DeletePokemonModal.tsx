// Import necessary components from react-bootstrap
import { Button, Modal } from "react-bootstrap";

// Import FC (Functional Component) type from React
import { FC } from "react";

// Define the props interface for the DeletePokemonModal component
interface DeletePokemonModalProps {
  deletePokemon: () => void; // Function to handle Pokémon deletion
  show: boolean; // Boolean indicating whether the modal should be shown
  onClose: () => void; // Function to close the modal
}

// Define the DeletePokemonModal component
const DeletePokemonModal: FC<DeletePokemonModalProps> = ({
  deletePokemon,
  show,
  onClose,
}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Pokémon</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this Pokémon?!?!</Modal.Body>
      <Modal.Footer>
        {/* Close button */}
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        {/* Delete button */}
        <Button variant="danger" onClick={deletePokemon}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePokemonModal;
