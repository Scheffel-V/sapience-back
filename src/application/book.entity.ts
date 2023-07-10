/* #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?int $chaptersAmount = null;

    #[ORM\Column(type: Types::JSON, nullable: true)]
    private array $chaptersToRemember = [];

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $priority = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $lastReviewDate = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $reviewHistory = [];

    #[ORM\ManyToOne(inversedBy: 'books')]
    private ?Author $authorId = null;

    #[ORM\OneToMany(mappedBy: 'bookId', targetEntity: Paragraph::class)]
    private Collection $paragraphs;

    #[ORM\OneToMany(mappedBy: 'bookId', targetEntity: Quote::class)]
    private Collection $quotes;

    #[ORM\Column(nullable: true)]
    private ?int $votes = null;

    #[ORM\Column(length: 255)]
    private ?string $visibility = null;
 */
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './author.entity';
import { Paragraph } from './paragraph.entity';
import { Quote } from './quote.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  chaptersAmount: number;

  @Column('simple-array')
  chaptersToRemember: string[];

  @Column()
  priority: string;

  @Column()
  lastReviewDate: Date;

  // TODO: reviewHistory field

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @OneToMany(() => Paragraph, (paragraph) => paragraph.book)
  paragraphs: Paragraph[];

  @OneToMany(() => Quote, (quote) => quote.book)
  quotes: Quote[];

  @Column()
  votes: number;

  @Column()
  visibility: string;
}
