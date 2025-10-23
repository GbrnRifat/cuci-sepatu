import { ItemModel } from "../model/itemModel.js";

export const ItemController = {
  // GET semua data (dengan filter status opsional)
  async getAll(req, res) {
    try {
      const { status } = req.query;
      const items = await ItemModel.getAll(status);
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // GET berdasarkan ID
  async getById(req, res) {
    try {
      const item = await ItemModel.getById(req.params.id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  // CREATE data baru
  async create(req, res) {
    try {
      const { nama, status, tanggalMasuk, tanggalSelesai } = req.body;
      if (!nama || !tanggalMasuk) {
        return res.status(400).json({ error: "Nama dan tanggalMasuk wajib diisi" });
      }

      await ItemModel.create({
        nama,
        status: status || "Menunggu",
        tanggalMasuk,
        tanggalSelesai: tanggalSelesai || "-"
      });

      res.status(201).json({ message: "Data sepatu berhasil ditambahkan." });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // UPDATE data sepatu
  async update(req, res) {
    try {
      const id = req.params.id;
      const payload = req.body;

      await ItemModel.update(id, payload);
      res.json({ message: "Status sepatu berhasil diperbarui." });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // DELETE data sepatu
  async remove(req, res) {
    try {
      const id = req.params.id;
      await ItemModel.remove(id);
      res.json({ message: "Data sepatu berhasil dihapus." });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
