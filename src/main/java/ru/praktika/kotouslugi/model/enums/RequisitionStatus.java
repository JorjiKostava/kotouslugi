package ru.praktika.kotouslugi.model.enums;

public enum  RequisitionStatus {
    DRAFT("черновик"),
    FILED("подана"),
    UNDER_CONSIDERATION("на рассмотрении"),
    ACCEPTED("принята");

    private String message;

    RequisitionStatus(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
