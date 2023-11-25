const apiBaseUrl = 'https://authify.xyz/auth';

export const apiModule = {
  login: async (username, password) => {
    const response = await fetch(`${apiBaseUrl}/authify-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  },

  register: async (username, password, email) => {
    const response = await fetch(`${apiBaseUrl}/authify-register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });

    if (!response.ok) {
      throw new Error(`Registration failed: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  },

  programLogin: async (program_owner, program_name, program_key, name, password) => {
    const response = await fetch(`${apiBaseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        program_owner,
        program_name,
        program_key,
        username: name,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Program login failed: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  },

  programRegister: async (program_owner, program_name, program_key, name, email, password) => {
    const response = await fetch(`${apiBaseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        program_owner,
        program_name,
        program_key,
        username: name,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Program registration failed: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  },

  createProgram: async (owner, program_name) => {
    const response = await fetch(`${apiBaseUrl}/program-create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ owner, program_name }),
    });

    if (!response.ok) {
      throw new Error(`Program creation failed: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  },
};
