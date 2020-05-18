import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function Installation() {
  return (
    <div id="installation">
      <h2>Installation</h2>
      <p>
        Install with <code>npm</code>:
      </p>
      <div id="install_example">
        <Container maxWidth="sm">
          <code>npm install -g react-hookify</code>
        </Container>
      </div>
    </div>
  );
}
