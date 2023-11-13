
module.exports = {
  extends: ['next/core-web-vitals', 'universe/node', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
