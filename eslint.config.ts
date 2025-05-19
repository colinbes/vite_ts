import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

type FlatConfigItem = {
  ignores?: string[];
  files?: string[];
  languageOptions?: {
    parser?: any;
    parserOptions?: {
      ecmaVersion?: string;
      sourceType?: string;
    };
    ecmaVersion?: string;
    sourceType?: string;
    globals?: Record<string, string>;
  };
  plugins?: Record<string, any>;
  rules?: Record<string, any>;
};

const config: FlatConfigItem[] = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '**/*.config.js',
      '**/vite.config.ts',
      '**/tsconfig.json',
      'package-lock.json',
      'package.json',
      '**/*.min.js',
      '**/*.min.css',
      '.env',
      '.env.*',
      '!.env.example',
      '**/__fixtures__/**',
      '**/__mocks__/**',
      '.vscode/**',
      '.idea/**',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',

      // Disable ESLint formatting rules to avoid conflicts with Prettier
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'quotes': 'off',
      'semi': 'off',
      'comma-dangle': 'off',
      'max-len': 'off',
      // Allow unused variables that start with underscore
      '@typescript-eslint/no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'destructuredArrayIgnorePattern': '^_',
        'caughtErrors': 'all',
        'caughtErrorsIgnorePattern': '^_'
      }]
    }
  }
];

export default config;
