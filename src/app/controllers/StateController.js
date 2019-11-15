import * as Yup from 'yup';

import State from '../models/State';

class StateController {
  async index(req, res) {
    const states = await State.findAll();

    if (states.length === 0) {
      return res.status(400).json({ error: 'Does not exists states' });
    }

    return res.json(states);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      initials: Yup.string()
        .min(2)
        .required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const statesExists = await State.findOne({
      where: { name: req.body.name },
    });

    if (statesExists) {
      return res.status(400).json({ error: 'State alredy exists' });
    }

    const { id, name, initials } = await State.create(req.body);

    return res.json({
      id,
      name,
      initials,
    });
  }
}

export default new StateController();
