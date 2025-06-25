import { Container } from "@/components/container";
import { N } from "@/components/n";
import { Key, Note, NoteWrapper } from "@/components/note";

export default function Home() {
  return (
    <Container>
      <NoteWrapper>
        <Note>
          <N>1.</N> <Key>Geoffrey Hinton</Key> played a major role in the
          foundation of modern AI.
        </Note>

        <Note>
          <N>2.</N> The World Wide Web, HTML, URLs, and HTTP were invented by{" "}
          <Key>Tim Berners-Lee</Key> at CERN beginning in 1989.
        </Note>
      </NoteWrapper>
    </Container>
  );
}
