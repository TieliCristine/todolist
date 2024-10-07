import { FormGroup } from '@angular/forms';

export interface CreateUserDto {
  email: string;
  password: string;
  name: string;
}

export const createUserDtoFactory = (form: FormGroup): CreateUserDto => {
  return form.value;
}
