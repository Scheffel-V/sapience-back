import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';
import { Author } from './author.entity';

/* 
#[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $text = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $priority = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $lastReviewDate = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $reviewHistory = [];

    #[ORM\Column(nullable: true)]
    private ?int $bookChapter = null;

    #[ORM\Column(length: 255)]
    private ?string $visibility = null;

    #[ORM\ManyToOne(inversedBy: 'paragraphs')]
    private ?Book $bookId = null;

    #[ORM\ManyToOne(inversedBy: 'paragraphs')]
    private ?Author $authorId = null;

    #[ORM\Column(nullable: true)]
    private ?int $votes = null;
*/
export class Paragraph {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  priority: string;

  @Column()
  lastReviewDate: Date;

  //TODO: reviewHistory field

  @Column()
  bookChapter: number;

  @Column()
  visibility: string;

  @ManyToOne(() => Book, (book) => book.paragraphs)
  book: Book;

  @ManyToOne(() => Author, (author) => author.paragraphs)
  author: Author;

  @Column()
  votes: number;
}
