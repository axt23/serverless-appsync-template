import { UsecaseHandler } from "./usecaseHandler";

export const graphqlHandler = async (event, _context) => {
  console.log('Received event', JSON.stringify(event));
  return await UsecaseHandler.handle(event);
}