# One website: nicholasbennett.work

Status: prepared locally. No domains, DNS records, hosting settings, remote branches, or deployments were changed. Carry out the following steps only after Nicholas approves the production cutover.

## What was verified on November 5, 2026

- This repository is `nrrb/bff-site`, an Astro static site built with `npm run build` into `dist/`.
- The live `https://bigfriendlyfunction.com/` returns HTTP 308 to `https://www.bigfriendlyfunction.com/`. The latter returns HTTP 200 with `server: Vercel`.
- Neither a local `.vercel/project.json` nor a deployment workflow is present. The Vercel project name, production branch, and dashboard overrides cannot be established from this checkout. Identify the existing project by its `www.bigfriendlyfunction.com` domain and connected `nrrb/bff-site` repository.
- Both domains use `dns1.registrar-servers.com` and `dns2.registrar-servers.com`, consistent with Namecheap DNS. DNS stays there; a nameserver transfer is unnecessary.

Public DNS observations (these are observations, not newly assigned records):

| Name | Type | Observed answer |
| --- | --- | --- |
| `bigfriendlyfunction.com` | A | `216.198.79.1` |
| `www.bigfriendlyfunction.com` | CNAME | `6708ff2cad6065f1.vercel-dns-017.com` |
| `nicholasbennett.work` | A | `64.29.17.1` and `216.198.79.1` |
| `www.nicholasbennett.work` | CNAME | No answer |

No apex AAAA or CAA answers were observed for either domain. Public DNS cannot show which Vercel project owns a domain. No content from the old nicholasbennett.work website or its separate source repository was inspected or reused.

## Repository changes

- `astro.config.mjs` sets `site` to `https://nicholasbennett.work`.
- The shared layout derives each page's canonical, `og:url`, and social image URL from that setting.
- `/sitemap.xml` lists the homepage, eight project pages, and presentation on the new domain. `/robots.txt` advertises it.
- `vercel.json` contains host-specific **308 permanent redirects** from both Big Friendly Function hostnames and `www.nicholasbennett.work` to the apex `nicholasbennett.work`, preserving the path and incoming query parameters. The canonical hostname and Vercel preview hostnames do not match those rules.
- These redirects take effect only after a Vercel deployment and domain assignment. Astro's local preview does not execute Vercel routing rules. A DNS alias alone does not produce an HTTP redirect.

## Approved cutover: Vercel

1. Open the **existing** Vercel project serving `www.bigfriendlyfunction.com`. Confirm its Git integration uses `nrrb/bff-site`. Under **Settings → Build and Deployment**, confirm Astro, repository root, build command `npm run build`, and output directory `dist`. Confirm the production branch under the project's Git/production environment settings. Keep one production project and one build.
2. In **Settings → Domains**, add `nicholasbennett.work` to this project, connecting it directly to **Production**. Choose the apex as the serving domain; do not accept a suggested redirect from the apex to `www`. If Vercel says the domain belongs to another project, move/reassign it from the old project. Do not import that project's source, assets, configuration, or content. Domain reassignment can immediately switch which existing deployment serves the address, so do this during the approved cutover window.
3. Add `www.nicholasbennett.work` to the same project. Retain both `bigfriendlyfunction.com` and `www.bigfriendlyfunction.com` on this project. Keep the four hostnames assigned to the production environment, not a feature branch.
4. Copy the exact DNS records displayed beside each domain. Vercel can allocate different targets per project/domain; the observed Big Friendly Function targets above are useful for comparison, but do not substitute them for a different target displayed by Vercel. If Vercel requests ownership verification, copy its exact TXT host and value too.
5. Apply only the necessary Namecheap record changes below, wait for Vercel to report **Valid Configuration**, and confirm HTTPS certificates for all four hostnames. This can take time to propagate. Do not redirect old visitors until the new apex can serve the existing website over HTTPS.
6. After approval to integrate and deploy this feature, merge the reviewed branch into the configured production branch and deploy it through the existing project. A Git push to a connected production branch may automatically deploy; do not push before that approval. Confirm the production deployment contains these changes, including `vercel.json`.
7. In **Settings → Domains → Edit**, replace the current `bigfriendlyfunction.com → www.bigfriendlyfunction.com` redirect. Configure **each** of these aliases to **Redirect to `nicholasbennett.work`**, using **308 Permanent Redirect**:
   - `bigfriendlyfunction.com`
   - `www.bigfriendlyfunction.com`
   - `www.nicholasbennett.work`

   Keep `nicholasbennett.work` connected directly to Production. These dashboard redirects agree with the checked-in host rules and remove the old extra hop. Do not configure a redirect back to a Big Friendly Function address.
8. Complete the verification below. Once the new site works, retire the old nicholasbennett.work hosting project: confirm it has no needed domains/services, then disable its deployment integration and remove the obsolete hosted project during the approved cutover. Do not keep it serving a second website. This work does not require editing or merging its separate repository.

## Approved cutover: Namecheap DNS

For each domain: **Namecheap → Domain List → Manage → Advanced DNS → Host Records**. Leave the nameservers in place. Use **Automatic** TTL (or 300 seconds if the UI allows it).

| Domain | Type | Host | Value / action |
| --- | --- | --- | --- |
| `nicholasbennett.work` | A | `@` | Use the exact apex A target(s) shown for this domain in the existing BFF project's Vercel Domains panel. Replace old web-serving A records only where they differ. Current answers are `64.29.17.1` and `216.198.79.1`; retain only the set Vercel requests. |
| `nicholasbennett.work` | CNAME | `www` | Add the exact CNAME target shown by Vercel for `www.nicholasbennett.work`. |
| `bigfriendlyfunction.com` | A | `@` | Keep `216.198.79.1` if Vercel still marks it valid; otherwise replace it with the displayed apex target(s). |
| `bigfriendlyfunction.com` | CNAME | `www` | Keep `6708ff2cad6065f1.vercel-dns-017.com` if Vercel still marks it valid; otherwise use the displayed target. |
| Either, only if requested | TXT | Exact verification host from Vercel | Exact verification value from Vercel. |

The newly assigned domain's exact targets and any ownership token require the authenticated Vercel Domains panel; they cannot be reliably inferred from the checkout or public DNS. Copy those displayed values, not a generic example IP from a tutorial. This is the only account-specific input left in the DNS table.

Remove conflicting **web records at `@` or `www` only**: old parking/URL Redirect records, A/AAAA records that Vercel does not request, or a record that conflicts with the new `www` CNAME. Do not remove email MX records, SPF/DKIM/DMARC TXT records, or unrelated subdomains. Do not use Namecheap's masked/iframe forwarding. Vercel handles the permanent HTTP redirects and TLS.

The contact address stays `nicholas@bigfriendlyfunction.com`; a website-domain change does not create a new mailbox. Keep that domain registered and its email configuration active. No new email address has been invented.

## Verify after the approved deployment

Check DNS and the canonical site:

```sh
dig +short nicholasbennett.work A
dig +short www.nicholasbennett.work CNAME
dig +short bigfriendlyfunction.com A
dig +short www.bigfriendlyfunction.com CNAME
curl -I https://nicholasbennett.work/
```

The canonical homepage must return **200** and show the updated Customer Success copy. Check each alias with both HTTP and HTTPS, including a deep link and query string:

```sh
curl -I 'https://bigfriendlyfunction.com/projects/medium-talk/?ref=domain-check'
curl -I 'https://www.bigfriendlyfunction.com/projects/medium-talk/?ref=domain-check'
curl -I 'https://www.nicholasbennett.work/projects/medium-talk/?ref=domain-check'
curl -I 'http://bigfriendlyfunction.com/projects/medium-talk/?ref=domain-check'
curl -I 'http://www.bigfriendlyfunction.com/projects/medium-talk/?ref=domain-check'
curl -I 'http://www.nicholasbennett.work/projects/medium-talk/?ref=domain-check'
curl -IL --max-redirs 5 'https://bigfriendlyfunction.com/projects/medium-talk/?ref=domain-check'
```

HTTPS aliases must return **308** with `Location: https://nicholasbennett.work/projects/medium-talk/?ref=domain-check`, then **200** at the destination. Vercel may first upgrade an HTTP request to HTTPS; every hop must be permanent and end at the same canonical URL without a loop. Also check `/`, `/presentation/`, all project pages, and an existing `/resumes/` PDF through the old domain. Unknown old nicholasbennett.work restaurant URLs should return 404; do not migrate those pages.

Inspect the production homepage and a project page: canonical and `og:url` must use `https://nicholasbennett.work`, and social images must use that host. Confirm `https://nicholasbennett.work/sitemap.xml` contains only that domain and `https://nicholasbennett.work/robots.txt` points to it.

If Google Search Console is in use, verify the new property, submit the new sitemap, and use Change of Address from the old property after redirects work. Update external profile links when ready. Keep the old domain's redirects and registration active for at least a year, preferably indefinitely for old links and email.

## References

- [Vercel: setting up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain) — project-specific DNS targets and external DNS management.
- [Vercel: deploying and redirecting domains](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting) — production domain assignment and dashboard redirects.
- [Vercel: redirect configuration](https://vercel.com/docs/project-configuration/vercel-json#redirects) — host conditions, paths, and permanent 308 status.
- [Namecheap: adding an A record](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/) — Advanced DNS navigation and conflicting records.
