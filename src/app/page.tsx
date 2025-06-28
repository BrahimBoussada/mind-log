import { Container } from "@/components/container";
import { N } from "@/components/n";
import { Key, Note, NoteWrapper } from "@/components/note";

export default function Home() {
  return (
    <Container>
      <NoteWrapper>
        <Note>
          <N>1. </N>
          <Key>Geoffrey Hinton</Key> played a major role in the foundation of
          modern AI.
        </Note>

        <Note>
          <N>2. </N>The World Wide Web, HTML, URLs, and HTTP were invented by{" "}
          <Key>Tim Berners-Lee</Key> at CERN beginning in 1989.
        </Note>

        <Note>
          <N>3. </N>
          <Key>Atoms</Key> are composed of a nucleus with protons and neutrons,
          surrounded by electrons.
        </Note>

        <Note>
          <N>4. </N>
          <Key>Cybernetics</Key> is the science of how systems, both natural and
          artificial, self-regulate by measuring their output and making
          adjustments to achieve a goal.
        </Note>

        <Note>
          <N>5. </N>
          <Key>The electromagnetic spectrum</Key> is the full range of all
          electromagnetic wave frequencies, including radio waves, microwaves,
          infrared, visible light, ultraviolet, X-rays, and gamma rays.
        </Note>
      </NoteWrapper>
    </Container>
  );
}
