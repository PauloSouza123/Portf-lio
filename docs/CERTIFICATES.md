# Course certificates migration

The portfolio currently contains **19 distinct completed courses**.

- **6 legacy certificates (2024–2025):** original PDFs are already tracked in `public/c_certificate/`.
- **13 new certificates (2026):** course metadata was checked against the user's uploaded certificates. Issuer verification links are available from the course gallery. **PDF assets for these 13 courses have not yet been pushed to GitHub.**

The newer Java course was provided as both a JPG and a PDF. These refer to the same 77-hour Udemy course and are intentionally shown only once.

## Where course metadata lives

`src/app/main/certificate/certificates.ts` is the single source of truth for the 19 course records.

Each record contains the original Portuguese course title, completion date, duration and topic. Provider and credential ID are included when available. External validation links are printed on the corresponding certificate; they should be tested in a browser before the final public release.

## Adding the 13 new PDFs

The original PDF files are supplied separately as `certificados_portfolio_2026.zip`, with safe names and this target structure:

```text
public/
  c_certificate/
    java-completo-udemy-2026.pdf
    spring-boot-danki-2026.pdf
    python-algoritmos-solyd-2026.pdf
    python-orientado-objetos-solyd-2026.pdf
    ataques-aplicacoes-web-solyd-2026.pdf
    bug-bounty-solyd-2026.pdf
    criptografia-senhas-solyd-2026.pdf
    pentest-infraestrutura-solyd-2026.pdf
    seguranca-informacao-solyd-2026.pdf
    linux-shell-pentest-solyd-2026.pdf
    metodologias-pentest-solyd-2026.pdf
    recon-pentest-solyd-2026.pdf
    redes-pentest-solyd-2026.pdf
```

1. Check out the `improve-international-profile-2026` branch.
2. Extract the archive into the repository root, merging (not replacing) the `public` folder.
3. Commit and push the 13 PDFs to this branch.
4. Update the corresponding entries in `certificates.ts` with `pdfPath: "/c_certificate/<filename>.pdf"` to enable direct PDF buttons in addition to issuer verification.
5. Verify all links in the browser and run the production build before merging.

## Source accuracy

The 6 original course records were taken from the older portfolio and preserve the dates and durations published there. The 13 newer records were taken from the PDF certificate files. Course completion is not represented as a professional certification or degree.

No confidential employer files, client data or private contracts are uploaded to this repository.
