const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    autoFocus: true,
    label: 'User name',
    placeholder: 'Enter name',
  },
  email: {
    type: 'text',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'Enter email',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'Enter password',
  },
};

export default fields;
