import City from '../models/City';

class CityController {
  async store(req, res) {
    const { state_id } = req.params;
    const { name } = req.body;
    const contentCity = { state_id, name };

    const city = await City.create(contentCity);

    return res.json(city);
  }

  async index(req, res) {
    const { state_id } = req.params;

    const citys = await City.findAll({
      where: { state_id },
      attributes: ['id', 'name', 'state_id'],
    });

    if (citys.length === 0) {
      return res
        .status(400)
        .json({ error: 'There are no cities registered in this state' });
    }

    return res.json(citys);
  }
}

export default new CityController();
