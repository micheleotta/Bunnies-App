import {db} from "../db.js"

export const getBunnies = (_, res) => {
    const q = "SELECT * FROM bunnies";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
}

export const createBunny = (req, res) => {
    const q = "INSERT INTO bunnies (name, species, age, owner, entry_year) VALUES (?, ?, ?, ?, ?)";
    db.query(q, [req.body.name, req.body.species, req.body.age, req.body.owner, req.body.entry_year], (err, data) => {
        if (err) return res.json(err);
        return res.status(201).json({message: "User inserido com sucesso"});
    });
}

export const updateBunny = (req, res) => {
    const q = "UPDATE bunnies SET name = ?, species = ?, age = ?, owner = ?, entry_year = ? WHERE id = ?";
    db.query(q, [req.body.name, req.body.species, req.body.age, req.body.owner, req.body.entry_year, req.body.id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json({message: "User atualizado com sucesso"});
    });
}

export const deleteBunny = (req, res) => {
    const q = "DELETE FROM bunnies WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json({message: "User deletado com sucesso"});
    });
}