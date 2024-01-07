import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function convertFile(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fake data after 3s');
      //reject(new Error('Fake error after 3s'));
    }, 1000);
  });
}
