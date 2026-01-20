export const AI_SUMMARY_EVENT = "ai-summary-toggle";

export interface AISummaryEventDetail {
  isExpanded: boolean;
}

declare global {
  interface WindowEventMap {
    [AI_SUMMARY_EVENT]: CustomEvent<AISummaryEventDetail>;
  }
}
