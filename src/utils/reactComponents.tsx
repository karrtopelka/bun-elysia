export const htmlStyles = {
  body: 'font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; display: grid; place-items: center; height: 100vh; margin: 0;',
  button:
    'background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;',
  header: 'font-size: 3rem; margin: 0;',
  subheader: 'font-size: 1rem; margin: 0;',
  container:
    'display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100vw; background-color: #f4f4f4; gap: 1rem;',
  infoContainer:
    'display: flex; flex-direction: column; gap: 1rem; border: 1px solid #1f1f1f; border-radius: 2rem; padding: 2rem;',
};

export const Header = ({ text }: { text: string }) => {
  return <h1 style={htmlStyles.header}>{text}</h1>;
};

export const Subheader = ({ text }: { text: string }) => {
  return <p style={htmlStyles.subheader}>{text}</p>;
};

export type ButtonProps = {
  text: string;
  link: string;
} & JSX.HtmlAnchorTag;

export const Button = ({ text, link, ...rest }: ButtonProps) => {
  return (
    <a href={link} style={htmlStyles.button} {...rest}>
      {text}
    </a>
  );
};

export const InfoContainer = ({ children }: { children: JSX.Element }) => {
  return <div style={htmlStyles.infoContainer}>{children}</div>;
};

export type BaseHtmlProps = {
  title?: string;
  children: JSX.Element;
};

export const BaseHtml = ({ title = 'AlphaMail', children }: BaseHtmlProps) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>
      </head>
      <body style={htmlStyles.body}>
        <div style={htmlStyles.container}>{children}</div>
      </body>
    </html>
  );
};
