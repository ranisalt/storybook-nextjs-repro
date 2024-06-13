import type { StorybookConfig } from '@storybook/nextjs';

export const getPreset = ({
  addons,
  ...config
}: Partial<StorybookConfig> = {}): StorybookConfig => ({
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  ...config,
  addons: ['@storybook/addon-essentials', ...addons],
  framework: '@storybook/nextjs',
});
