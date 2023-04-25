const serverUrl = 'https://api.zeusint.com/api/v1';

export const serverLogin = async (email: string, password: string) => {
    const response = {
      email: email,
      password : password,
      token : "1q2w3e4r5t",
      success: true,
      firstName: "eden",
      lastName: "meshualm",
      error : ""
      
      
    };
    return response;
  };

export const serverRegister = async () =>
{
  const response = {}
  return response;
}