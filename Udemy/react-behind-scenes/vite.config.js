import react from '@vitejs/plugin-react';

export default {
  plugins: [react({
    jsxRuntime: 'automatic' // <- important
  })]
}
