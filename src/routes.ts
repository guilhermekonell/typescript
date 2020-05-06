import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'guilherme@teste.com',
    password: '123456',
    techs: [
      'NodeJs',
      'React', 
      'React Native',
      { title: 'Javascript', experience: 100 }
    ]
  });

  return response.json({ message: 'Hello World' });
}