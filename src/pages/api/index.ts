import { Request, Response } from 'express';
import apiSearch from '../../utils/cloudinary.api';

const handler = async (req: Request, res: Response): Promise<Response> => {
  const data = await apiSearch({
    type: 'upload',
    prefix: 'gallery',
    max_results: 50,
  });
  return res.status(200).json(data);
};

export default handler;
