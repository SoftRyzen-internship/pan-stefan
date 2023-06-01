export interface IWorkFormData {
  comment: string;
  phone: string;
  username: string;
};

export interface InitialFormState  {
  isSending: boolean,
  error: boolean,
  finalMessage: null | string,
}