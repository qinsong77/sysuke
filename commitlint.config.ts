import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (commit) =>
      commit.includes('RELEASING:') || commit.includes('Version Packages'),
  ],
}

export default Configuration
