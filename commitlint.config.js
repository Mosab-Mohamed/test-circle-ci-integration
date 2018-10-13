module.exports = {
  extends: ['@commitlint/config-conventional'],

  parserPreset: {
    parserOpts: {
      issuePrefixes: ['DCFS-'],
    },
  },

  rules: {
    'references-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feature',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
}
