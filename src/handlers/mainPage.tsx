import {
  generateManifest,
  getDomain,
  BaseHtml,
  Header,
  Subheader,
  InfoContainer,
  Button,
} from '../utils';

export const mainPage = (host: null | string) => {
  const [hostname, port] = host ? host.split(':') : [];
  const manifest = generateManifest(hostname, Number(port));
  const callbackUrl = `${getDomain(hostname, Number(port))}/api/oauth/authorize`;

  return (
    <BaseHtml
      title='API'
      children={
        <>
          <Header text='API' />
          <Subheader text='This is the API for Pipedrive AlphaMail' />
          <InfoContainer
            children={
              <>
                <p>Callback URL</p>
                <code>{callbackUrl}</code>
                <hr style='width: 100%;' />
                <p>Manifest</p>
                <pre style='text-align: left;'>{JSON.stringify(manifest, null, 4)}</pre>
                <Button link='/api/manifest' text='Download manifest' download='manifest.json' />
              </>
            }
          />
        </>
      }
    />
  );
};
