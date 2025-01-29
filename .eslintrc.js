module.exports = {
  parser: '@typescript-eslint/parser',  // Usado para entender o código TypeScript
  parserOptions: {
    ecmaVersion: 2020,  // Defina a versão do ECMAScript que você está utilizando
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',  // Regras recomendadas do ESLint
    'plugin:react/recommended',  // Regras recomendadas para React
    'plugin:@typescript-eslint/recommended',  // Regras recomendadas para TypeScript
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Regras personalizadas aqui (exemplo)
    'react/prop-types': 'off',  // Desabilita a validação de prop-types no React (já coberto pelo TypeScript)
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]  // Ignora variáveis começando com _
  },
  settings: {
    react: {
      version: 'detect',  // Detecta a versão do React automaticamente
    },
  },
};
