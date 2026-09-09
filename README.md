# investment-admin

Private administration frontend for the Investment Portal.

## Connection
This frontend connects to the existing `investment-portal-api` Worker:
`https://investment-portal-api.helpinghandssupportnetwork.workers.dev`

It uses the same D1-backed accounts as the Member site.

## Current server capabilities used
- Secure server-side admin authentication
- User search
- User editing
- Active/suspended status
- Manual KWD credit/debit
- Funding approval/rejection
- Withdrawal approval/rejection
- Investment management
- Administrative audit log

## First administrator
Use **First administrator setup** on the sign-in screen. The setup key is supplied by the Worker environment as `ADMIN_SETUP_KEY`; it is never stored in this repository.

## Important
The current Worker stores the live wallet balance as KWD. This Admin build therefore sends manual balance changes as KWD. USD/EUR multi-balance accounting should be added to the shared Worker/D1 schema before enabling those currencies for real accounting; the UI does not pretend they are supported server-side.

Do not put API secrets or the Worker setup key into this repository.
