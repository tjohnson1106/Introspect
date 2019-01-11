interface Error {
  path: string;
  message: string;
}

export const normalizeErrors = (errors: Error[]) => {
  // map key: value
  const errorMap: { [key: string]: string } = {};

  errors.forEach((err) => {
    errorMap[err.path] = err.message;
  });

  return errorMap;
};
