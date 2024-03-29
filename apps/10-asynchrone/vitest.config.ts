import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.spec.{js,ts}'],
    watch: true,
    reporters: 'verbose',
  },
});
