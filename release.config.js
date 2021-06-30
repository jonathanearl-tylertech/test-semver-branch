module.exports = {
    branches: [
        { name: "1.x", range: "1.x", channel: "1.x"},
        "main",
        { name: 'next', channel: 'next', prerelease: 'next' }, 
    ],
    repositoryUrl: 'https://github.com/whattheearl/test-semver-branch',
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/github',
    ]
}
