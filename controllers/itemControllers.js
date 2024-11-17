import itemModel from "../models/itemModel.js";

class ItemsController {
  constructor() {}

  async getAll(req, res) {
    try {
      const page = req.query.p || 0;
      const pageFormat = parseInt(page);
      const nextPage = pageFormat + 1;
      const next = `http://localhost:5000/items?p=${nextPage}`;

      const nextData = await itemModel.getAll(nextPage);
      const data = await itemModel.getAll(page);

      // Si no hay más datos para la siguiente página, solo envía la respuesta con `next: null`
      if (nextData.length === 0) {
        console.log("hola, ingrese al if");
        return res.status(201).json({ next: null, data: data }); // Usa `return` para evitar el siguiente `res`
      }

      // Si hay más datos, envía la respuesta con el `next` URL
      return res.status(201).json({ next: next, data: data });
    } catch (e) {
      console.log(e);
      res.status(500).send(e); // Solo una respuesta de error si algo falla
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const data = await itemModel.getOne(id);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async create(req, res) {
    try {
      const data = await itemModel.create(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await itemModel.update(id, req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await itemModel.delete(id);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new ItemsController();
