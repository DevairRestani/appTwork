import * as Yup from 'yup';

import Job from '../models/Job';
import User from '../models/User';

class JobController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new JobController();
