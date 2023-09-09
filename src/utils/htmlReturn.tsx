export type HtmlReturnProps = {
  title?: string;
  data: JSX.Element;
};

export const htmlStyles = {
  body: 'font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; display: grid; place-items: center; height: 100vh; margin: 0;',
  button:
    'background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;',
  header: 'font-size: 3rem; margin: 0;',
  subheader: 'font-size: 1rem; margin: 0;',
  container:
    'display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100vw; background-color: #f4f4f4; gap: 1rem;',
};

export const htmlReturn = ({ title = 'AlphaMail', data }: HtmlReturnProps) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>
      </head>
      <body style={htmlStyles.body}>
        <div style={htmlStyles.container}>{data}</div>
      </body>
    </html>
  );
};
