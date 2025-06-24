import { Container } from "@/components/container";
import { N } from "@/components/n";
import { Key, Note, NoteWrapper } from "@/components/note";

export default function Home() {
  return (
    <Container>
      <NoteWrapper>
        <Note>
          <N>1.</N> <Key>Geoffrey Hinton</Key> played a major role in the
          foundation for modern AI.
        </Note>
      </NoteWrapper>
    </Container>
  );
}
