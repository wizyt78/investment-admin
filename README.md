# investment-admin

Private administration frontend for the Investment Portal.

## Current build
This build preserves the existing authentication flow and Worker connection while improving:
- Premium responsive administration UI
- Mobile layout and horizontal navigation
- Desktop/tablet/mobile spacing and typography
- Arabic/English RTL/LTR switching
- KWD/USD/EUR currency controls in the existing admin actions
- Safer amount parsing so `3000` is sent as numeric `3000`, not multiplied by the frontend
- User search/edit/status management
- Manual credit/debit
- Funding and withdrawal review
- Investment management
- Audit log
- Light/dark theme

## Connection
The frontend connects to:
`https://investment-portal-api.helpinghandssupportnetwork.workers.dev`

The exact backend accounting behavior is controlled by the shared Worker/D1. The frontend does not invent balances or financial records.

## Important backend dependency
The current frontend can display and send currency selections, but true USD/EUR accounting, investment/earnings controls, withdrawal rejection messages, and member notifications must be implemented in the shared Worker/D1 before those capabilities can be considered complete.

Do not put API secrets or the Worker setup key into this repository.
