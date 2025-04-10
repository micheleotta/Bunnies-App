import "./App.css";
import BunnyList from "./components/BunnyList";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import { Routes, Route, useNavigate } from "react-router-dom";
import BunnyItem from "./components/BunnyItem";
import Header from "./components/Header";
import Home from "./components/Home";
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';

const inputForm = {
  mt: 1.5
}

export default function App() {
  const navigate = useNavigate();

  const [isEditModal, setIsEditModal] = useState(false);
  const [editedBunny, setEditedBunny] = useState({});
  const [editError, setEditError] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);

  const [isAddModal, setIsAddModal] = useState(false);
  const [newBunny, setNewBunny] = useState({ name: "", species: "", age: "", owner: "", entry_year: "" });
  const [addError, setAddError] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  const [delSuccess, setDelSuccess] = useState(false);


  function clicked(item) {
    navigate(`/bunny/${item.id}`, { state: { bunny: item } });
  }

  function handleEdit(item) {
    setEditedBunny(item);
    setIsEditModal(true);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditedBunny((prev) => ({ ...prev, [name]: value }));
  }

  function handleNewBunnyChange(e) {
    const { name, value } = e.target;
    setNewBunny((prev) => ({ ...prev, [name]: value }));
  }

  function closeEditModal() {
    setIsEditModal(false);
    setEditError(false);
    setEditedBunny({});
  }

  function closeAddModal() {
    setIsAddModal(false);
    setAddError(false);
    setNewBunny({ name: "", species: "", age: "", owner: "", entry_year: "" });
  }

  function handleSaveEdit() {
    const { name, species, age, owner, entry_year } = editedBunny;
    if (!name || !species || !age || !owner || !entry_year) {
      setEditError(true);
      return;
    }
    setEditError(false);

    fetch(`http://localhost:8800/${editedBunny.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedBunny),
    })
      .then(response => response.json())
      .then(() => {
        console.log("Coelho atualizado com sucesso!");
        setEditSuccess(true);
        setIsEditModal(false);
        setTimeout(() => {
          setEditSuccess(false);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }, 2500);
      })
      .catch(error => console.error("Erro ao editar:", error));
  }

  function handleDelete(id) {
    console.log('Deletar coelho:', id);

    fetch(`http://localhost:8800/${id}`, { method: "DELETE" })
      .then(response => response.json())
      .then(() => {
        setDelSuccess(true);
        console.log(`Coelho ${id} deletado.`);
        setTimeout(() => {
          setDelSuccess(false);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }, 2500);
      })
      .catch(error => console.error("Erro ao deletar:", error));
  }

  function handleSaveNewBunny() {
    const { name, species, age, owner, entry_year } = newBunny;
    if (!name || !species || !age || !owner || !entry_year) {
      setAddError(true);
      return;
    }
    setAddError(false);

    fetch(`http://localhost:8800/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBunny),
    })
      .then(response => response.json())
      .then(() => {
        console.log("Novo coelho adicionado.");
        setIsAddModal(false);
        setAddSuccess(true);
        setNewBunny({ name: "", species: "", age: "", owner: "", entry_year: "" });
        setTimeout(() => {
          setAddSuccess(false);
          window.location.reload();
        }, 2500);
      })
      .catch(error => console.error("Erro ao adicionar coelho:", error));
  }

  return (
    <>
      <Header />

      {/* Mensagem de sucesso em editar */}
      <Fade in={editSuccess} timeout={{ enter: 300, exit: 600 }}>
        <Alert
          severity="success"
          className="success-alert"
          onClose={() => setEditSuccess(false)}
        >
          Coelho atualizado com sucesso!
        </Alert>
      </Fade>

      {/* Mensagem de sucesso em adicionar */}
      <Fade in={addSuccess} timeout={{ enter: 300, exit: 600 }}>
        <Alert
          severity="success"
          className="success-alert"
          onClose={() => setAddSuccess(false)}
        >
          Coelho adicionado com sucesso!
        </Alert>
      </Fade>

      {/* Mensagem de sucesso em deletar */}
      <Fade in={delSuccess} timeout={{ enter: 300, exit: 600 }}>
        <Alert
          severity="success"
          className="success-alert"
          onClose={() => setDelSuccess(false)}
        >
          Coelho deletado com sucesso!
        </Alert>
      </Fade>

      <Routes>
        <Route path="/bunnies" element={
          <div style={{ marginTop: 72 }}>
            <BunnyList clicked={clicked} onEdit={handleEdit} onDelete={handleDelete} onAdd={() => setIsAddModal(true)} />

            {/* Modal de editar */}
            <Modal open={isEditModal} onClose={closeEditModal}>
              <Box className="modal-style">
                {/* Alerta de campos em branco */}
                {editError && (
                  <Alert severity="error" sx={{ mb: 2 }}>Não deixe nenhum campo em branco!</Alert>
                )}
                <Typography variant="h5" className="modal-top-style">Editar Coelho</Typography>
                <TextField name="name" label="Name" value={editedBunny.name} onChange={handleInputChange} sx={inputForm} required />
                <TextField name="species" label="Species" value={editedBunny.species} onChange={handleInputChange} sx={inputForm} required />
                <TextField name="age" type="number" label="Age" value={editedBunny.age} onChange={handleInputChange} sx={inputForm} required />
                <TextField name="owner" label="Owner" value={editedBunny.owner} onChange={handleInputChange} sx={inputForm} required />
                <TextField name="entry_year" type="number" label="Entry Year" value={editedBunny.entry_year} onChange={handleInputChange} sx={inputForm} required />

                <Box className="modal-buttons">
                  <Button className="pink-button" onClick={handleSaveEdit}>Salvar</Button>
                  <Button onClick={closeEditModal}>Cancelar</Button>
                </Box>

              </Box>
            </Modal>

            {/* Modal de adicionar novo */}
            <Modal open={isAddModal} onClose={closeAddModal}>
              <Box className="modal-style">
                {/* Alerta de campos em branco */}
                {addError && (
                  <Alert severity="error" sx={{ mb: 2 }}>Não deixe nenhum campo em branco</Alert>
                )}

                <Typography variant="h5" className="modal-top-style">Adicionar Novo Coelho</Typography>
                <TextField name="name" label="Name" value={newBunny.name} onChange={handleNewBunnyChange} sx={inputForm} required />
                <TextField name="species" label="Species" value={newBunny.species} onChange={handleNewBunnyChange} sx={inputForm} required />
                <TextField name="age" type="number" label="Age" value={newBunny.age} onChange={handleNewBunnyChange} sx={inputForm} required />
                <TextField name="owner" label="Owner" value={newBunny.owner} onChange={handleNewBunnyChange} sx={inputForm} required />
                <TextField name="entry_year" type="number" label="Entry Year" value={newBunny.entry_year} sx={inputForm} onChange={handleNewBunnyChange} required />

                <Box className="modal-buttons">
                  <Button className="pink-button" onClick={handleSaveNewBunny}>Adicionar</Button>
                  <Button onClick={closeAddModal}>Cancelar</Button>
                </Box>

              </Box>
            </Modal>
          </div>
        } />

        <Route path="/bunny/:id" element={<BunnyItem />} />
        <Route path="/" element={<Home clicked={clicked} />} />

      </Routes>
    </>
  );
}