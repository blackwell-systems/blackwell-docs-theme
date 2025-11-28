/**
 * Blackwell Systems - Docsify Plugin & Config Helpers
 *
 * Usage: Include this after docsify.min.js in your index.html:
 *   <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
 *   <script src="https://blackwell-systems.github.io/blackwell-docs-theme/blackwell.js"></script>
 */

(function () {
  'use strict';

  // Theme base URL
  var THEME_BASE = 'https://blackwell-systems.github.io/blackwell-docs-theme';

  /**
   * Default Blackwell docsify configuration
   * Merge with your project-specific config:
   *
   *   window.$docsify = Object.assign({}, BlackwellTheme.defaults, {
   *     name: 'My Project',
   *     repo: 'https://github.com/blackwell-systems/my-project'
   *   });
   */
  var defaults = {
    // Use shared logo
    logo: THEME_BASE + '/logo.svg',

    // Enable coverpage
    coverpage: true,

    // Enable sidebar
    loadSidebar: true,

    // Show heading levels in sidebar
    subMaxLevel: 2,

    // Theme color (white accent on dark)
    themeColor: '#ffffff',

    // Search plugin config
    search: {
      placeholder: 'Search docs...',
      noData: 'No results found',
      depth: 3
    },

    // Auto-scroll to top when changing pages
    auto2top: true,

    // Execute scripts in markdown
    executeScript: true
  };

  /**
   * Helper to create consistent GitHub links
   */
  function githubLinks(org, repo) {
    return {
      repo: 'https://github.com/' + org + '/' + repo,
      issues: 'https://github.com/' + org + '/' + repo + '/issues',
      releases: 'https://github.com/' + org + '/' + repo + '/releases'
    };
  }

  /**
   * Docsify plugin: Add "Edit on GitHub" link to pages
   */
  function editOnGithubPlugin(hook, vm) {
    hook.beforeEach(function (content) {
      var repo = vm.config.repo;
      var branch = vm.config.editBranch || 'main';
      var docsPath = vm.config.editPath || 'docs/';

      if (!repo || vm.route.path === '/') {
        return content;
      }

      var editUrl = repo + '/edit/' + branch + '/' + docsPath + vm.route.file;
      var editLink = '\n\n---\n\n' +
        '<p style="text-align: right; font-size: 0.85em; opacity: 0.7;">' +
        '<a href="' + editUrl + '" target="_blank">Edit this page on GitHub</a>' +
        '</p>';

      return content + editLink;
    });
  }

  /**
   * Docsify plugin: Add last updated timestamp
   */
  function lastUpdatedPlugin(hook, vm) {
    hook.beforeEach(function (content) {
      // This would need server-side support or git info
      // Placeholder for future implementation
      return content;
    });
  }

  /**
   * Docsify plugin: Copy code button
   */
  function copyCodePlugin(hook, vm) {
    hook.doneEach(function () {
      var codeBlocks = document.querySelectorAll('pre[data-lang]');

      codeBlocks.forEach(function (block) {
        // Skip if already has button
        if (block.querySelector('.copy-btn')) return;

        var btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.style.cssText = 'position:absolute;top:5px;right:5px;padding:3px 8px;' +
          'font-size:12px;background:#333;color:#fff;border:none;border-radius:3px;' +
          'cursor:pointer;opacity:0;transition:opacity 0.2s;';

        block.style.position = 'relative';
        block.appendChild(btn);

        block.addEventListener('mouseenter', function () {
          btn.style.opacity = '1';
        });
        block.addEventListener('mouseleave', function () {
          btn.style.opacity = '0';
        });

        btn.addEventListener('click', function () {
          var code = block.querySelector('code');
          navigator.clipboard.writeText(code.textContent).then(function () {
            btn.textContent = 'Copied!';
            setTimeout(function () {
              btn.textContent = 'Copy';
            }, 2000);
          });
        });
      });
    });
  }

  // Export for use in projects
  window.BlackwellTheme = {
    version: '1.0.0',
    baseUrl: THEME_BASE,
    defaults: defaults,
    githubLinks: githubLinks,
    plugins: {
      editOnGithub: editOnGithubPlugin,
      lastUpdated: lastUpdatedPlugin,
      copyCode: copyCodePlugin
    }
  };

  // Auto-register plugins if docsify is present
  if (window.$docsify && window.$docsify.plugins) {
    // Plugins already defined, user is managing manually
  } else if (window.$docsify) {
    window.$docsify.plugins = (window.$docsify.plugins || []).concat([
      copyCodePlugin
    ]);
  }
})();
