import { CreateNewUserRequest, CreateNewUserUsecase, FindLoginUserUsecase } from "@/core/application";
import { container } from "./registories";

export const graphqlHandler = async (event, _context) => {
  console.log('Received event', JSON.stringify(event));

  try {
    switch(event.info.fieldName) {
      case 'me':
        const findLoginUserUsecase = container.get<FindLoginUserUsecase>('FindLoginUserUsecase');
        const findLoginUserResponse = await findLoginUserUsecase.handle({});
        return findLoginUserResponse.data;
      case 'createUser':
        const createNewUserRequest = event.arguments.input as CreateNewUserRequest; 
        const createNewUserUsecase = container.get<CreateNewUserUsecase>('CreateNewUserUsecase');
        const createNewUserResponse = await createNewUserUsecase.handle(createNewUserRequest);
        return createNewUserResponse.data;
      default:
        throw new Error(`Unknown field, unable to resolve ${event.info.fieldName}`);
    }
  } catch (e) {
    console.error(e);
    // TODO: return error response
    return;
  }
}