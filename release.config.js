module.exports = {
    branches: [
        master,
        { name: 'next', channel: 'next', prerelease: 'next' }, 
    ],
    repositoryUrl: 'https://github.com/whattheearl/test-semver-branch',
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/github',
    ]
}