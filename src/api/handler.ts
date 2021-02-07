import { CreateNewUserRequest, CreateNewUserUsecase, FindLoginUserUsecase } from "@/core/application";
import { container } from "./registories";

export const graphqlHandler = async (event, _context) => {
  console.log('Received event', JSON.stringify(event));

  switch(event.info.fieldName) {
    case 'me':
      const findLoginUserUsecase = container.get<FindLoginUserUsecase>('FindLoginUserUsecase');
      const findLoginUserResponse = await findLoginUserUsecase.handle({});
      // TODO: Use mapper
      const findLoginUserResponseUser = findLoginUserResponse.user;
      return {
        id: findLoginUserResponseUser.id,
        email: findLoginUserResponseUser.email.email,
        familyName: findLoginUserResponseUser.familyName,
        givenName: findLoginUserResponseUser.givenName,
        displayName: findLoginUserResponseUser.displayName,
      };
    case 'createUser':
      const createNewUserRequest = event.arguments.input as CreateNewUserRequest; 
      const createNewUserUsecase = container.get<CreateNewUserUsecase>('CreateNewUserUsecase');
      const createNewUserResponse = await createNewUserUsecase.handle(createNewUserRequest);
      // TODO: Use mapper
      const createNewUserResponseUser = createNewUserResponse.user;
      return {
        id: createNewUserResponseUser.id,
        email: createNewUserResponseUser.email.email,
        familyName: createNewUserResponseUser.familyName,
        givenName: createNewUserResponseUser.givenName,
        displayName: createNewUserResponseUser.displayName,
      };
    default:
      throw new Error(`Unknown field, unable to resolve ${event.info.fieldName}`);
  }
}