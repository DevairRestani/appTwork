import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      telephone: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      cpf_cnpj: Yup.string().required(),
      company: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'Email already exists.' });
    }

    const {
      id,
      name,
      email,
      telephone,
      city,
      state,
      cpf_cnpj,
    } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      telephone,
      city,
      state,
      cpf_cnpj,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, telephone, city, state } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      telephone,
      city,
      state,
    });
  }
}

export default new UserController();
