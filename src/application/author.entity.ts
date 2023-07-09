/*
#[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $birthdate = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $biography = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $priority = null;

    #[ORM\Column(length: 255)]
    private ?string $visibility = null;

    #[ORM\Column(nullable: true)]
    private ?int $votes = null;

    #[ORM\OneToMany(mappedBy: 'authorId', targetEntity: Book::class)]
    private Collection $books;

    #[ORM\OneToMany(mappedBy: 'authorId', targetEntity: Paragraph::class)]
    private Collection $paragraphs;

    #[ORM\OneToMany(mappedBy: 'authorId', targetEntity: Quote::class)]
    private Collection $quotes;
*/
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Book from './book.entity';
import { Quote } from './quote.entity';
import { Paragraph } from './paragraph.entity';
@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthdate: Date;

  @Column()
  biography: string;

  @Column()
  priority: string;

  @Column()
  visibility: string;

  @Column()
  votes: number;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];

  @OneToMany(() => Paragraph, (paragraph) => paragraph.author)
  paragraphs: Paragraph[];

  @OneToMany(() => Quote, (quote) => quote.author)
  quotes: Quote[];
}
