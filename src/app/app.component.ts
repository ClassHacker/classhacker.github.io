import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CommandName = 'about' | 'experience' | 'education' | 'projects' | 'skills' | 'contact' | 'help' | 'clear';

interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  link: string;
  details: string[];
  tags: string[];
}

interface ProjectEntry {
  name: string;
  description: string;
  demo: string;
  source: string;
  tags: string[];
}

interface SkillEntry {
  name: string;
  type: 'language' | 'framework' | 'service' | 'tool' | 'ai';
}

interface TerminalLine {
  prompt?: string;
  command?: string;
  kind?: 'info' | 'success' | 'muted' | 'error';
  text?: string;
  section?: CommandName;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('commandInput') commandInput?: ElementRef<HTMLInputElement>;

  readonly prompt = 'ajay@portfolio:~$';
  command = '';
  historyIndex = -1;
  commandHistory: string[] = [];

  lines: TerminalLine[] = [
    { kind: 'success', text: 'Booting portfolio shell...' },
    { kind: 'muted', text: 'Type "help" for available commands.' },
    { prompt: this.prompt, command: 'about' },
    { section: 'about' }
  ];

  readonly experience: TimelineEntry[] = [
    {
      title: 'Engineer II',
      organization: 'Goldman Sachs | Apexon',
      period: 'July 2025 - Present',
      link: 'https://www.apexon.com/',
      details: ['Building and supporting Java full stack systems across enterprise workflows.'],
      tags: ['Java 8', 'Spring Framework', 'Spring Boot', 'Camunda Platform', 'JUnit', 'Mockito', 'MySQL', 'IntelliJ IDEA', 'Postman', 'GitLab', 'GitHub Copilot', 'Bitbucket']
    },
    {
      title: 'System Engineer',
      organization: 'Vanguard | Tata Consultancy Services',
      period: 'Aug 2021 - July 2025',
      link: 'https://www.tcs.com/',
      details: ['Delivered full stack application work with Java, Angular, Node, AWS services, testing, and CI tooling.'],
      tags: ['Java 8', 'Spring Boot', 'Angular', 'TypeScript', 'Node', 'Express', 'JUnit', 'Mockito', 'Jest', 'Cucumber', 'Python', 'ECS', 'CloudFormation', 'DynamoDB', 'Lambda', 'S3', 'CloudWatch', 'Route53', 'SQS', 'SNS', 'Splunk', 'Jira', 'Bamboo']
    }
  ];

  readonly education: TimelineEntry[] = [
    {
      title: 'Bachelor of Technology',
      organization: 'Bansal College Of Engineering',
      period: '2017 - 2021',
      link: 'https://bce.ac.in/',
      details: ['Computer Science Engineering', 'CGPA: 8.59'],
      tags: ['Computer Science', 'Software Engineering', 'Problem Solving']
    }
  ];

  readonly projects: ProjectEntry[] = [
    {
      name: 'tic-tac-toe',
      description: 'A simple tic-tac-toe game.',
      demo: 'https://classhacker.github.io/tic-tac-toe/',
      source: 'https://github.com/ClassHacker/tic-tac-toe',
      tags: ['React', 'React Redux', 'React Bootstrap', 'Sass', 'Jest']
    },
    {
      name: 'classhacker.github.io',
      description: 'This personal portfolio site, built as a terminal-themed Angular app.',
      demo: 'https://classhacker.github.io/',
      source: 'https://github.com/ClassHacker/classhacker.github.io',
      tags: ['Angular', 'TypeScript', 'Sass', 'GitHub Pages']
    }
  ];

  readonly skills: SkillEntry[] = [
    { name: 'Java', type: 'language' },
    { name: 'TypeScript', type: 'language' },
    { name: 'JavaScript', type: 'language' },
    { name: 'Python', type: 'language' },
    { name: 'Angular', type: 'framework' },
    { name: 'React', type: 'framework' },
    { name: 'Spring Boot', type: 'framework' },
    { name: 'Express', type: 'framework' },
    { name: 'JUnit', type: 'framework' },
    { name: 'Mockito', type: 'framework' },
    { name: 'Jest', type: 'framework' },
    { name: 'DynamoDB', type: 'service' },
    { name: 'CloudFormation', type: 'service' },
    { name: 'Lambda', type: 'service' },
    { name: 'SQS', type: 'service' },
    { name: 'SNS', type: 'service' },
    { name: 'Postman', type: 'tool' },
    { name: 'Bamboo', type: 'tool' },
    { name: 'Git', type: 'tool' },
    { name: 'Node', type: 'tool' },
    { name: 'ChatGPT', type: 'ai' },
    { name: 'Claude', type: 'ai' },
    { name: 'GitHub Copilot', type: 'ai' }
  ];

  readonly socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/classhacker', handle: '/in/classhacker' },
    { label: 'Email', href: 'mailto:ajaykeer1401@gmail.com', handle: 'ajaykeer1401@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/ClassHacker', handle: '@ClassHacker' },
    { label: 'StackOverflow', href: 'https://stackoverflow.com/users/12500840/classhacker', handle: 'classhacker' },
    { label: 'Telegram', href: 'https://t.me/classhacker', handle: '@classhacker' },
    { label: 'Instagram', href: 'https://www.instagram.com/ajay_dayma_1401/', handle: '@ajay_dayma_1401' }
  ];

  runCommand(): void {
    const rawCommand = this.command.trim();

    if (!rawCommand) {
      this.lines.push({ prompt: this.prompt, command: '' });
      return;
    }

    this.commandHistory.push(rawCommand);
    this.historyIndex = this.commandHistory.length;
    this.lines.push({ prompt: this.prompt, command: rawCommand });
    this.command = '';

    const normalized = rawCommand.toLowerCase();
    if (this.isCommand(normalized)) {
      if (normalized === 'clear') {
        this.lines = [];
      } else {
        this.lines.push({ section: normalized });
      }
    } else {
      this.lines.push({
        kind: 'error',
        text: `command not found: ${rawCommand}. Try "help".`
      });
    }

    queueMicrotask(() => this.scrollToBottom());
  }

  useHistory(direction: 'previous' | 'next'): void {
    if (!this.commandHistory.length) {
      return;
    }

    if (direction === 'previous') {
      this.historyIndex = Math.max(0, this.historyIndex - 1);
    } else {
      this.historyIndex = Math.min(this.commandHistory.length, this.historyIndex + 1);
    }

    this.command = this.commandHistory[this.historyIndex] ?? '';
  }

  focusTerminal(): void {
    this.commandInput?.nativeElement.focus();
  }

  private isCommand(value: string): value is CommandName {
    return ['about', 'experience', 'education', 'projects', 'skills', 'contact', 'help', 'clear'].includes(value);
  }

  private scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
