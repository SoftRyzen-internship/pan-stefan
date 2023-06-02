export interface IWorkFormData {
  username: string;
  phone: string;
  age: string,
  comment: string;
};

export interface InitialFormState  {
  isSending: boolean,
  error: boolean,
  finalMessage: null | string,
}